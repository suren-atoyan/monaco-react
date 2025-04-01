import { useState, useRef, useEffect } from "react";
import * as monaco from "monaco-editor";
import { loader } from "@monaco-editor/react";

import useMount from '../useMount';
export function useMonaco() {
	const [monacoInstance, setMonacoInstance] = useState<typeof monaco | null>(
		null
	);
	const mountedRef = useRef(true);
	const loaderRef = useRef<Promise<typeof monaco> | null>(null);

	useMount(() => {
		// Check if Monaco is already loaded
		const instance = loader.__getMonacoInstance();

		if (instance) {
			setMonacoInstance(instance);
			return;
		}

		// If not loaded, initialize it
		if (!loaderRef.current) {
			// Configure loader with minimum settings to avoid errors
			loader.config({
				// Completely disable NLS
				"vs/nls": { availableLanguages: {} },
			});

			// Handle initialization with better error catching
			try {
				loaderRef.current = loader.init();

				loaderRef.current
					.then((monacoApi: typeof monaco) => {
						if (mountedRef.current) {
							setMonacoInstance(monacoApi);
						}
					})
					.catch((error: any) => {
						// Ignore cancelation errors, log other errors
						if (mountedRef.current && error.type !== "cancelation") {
							console.error("Monaco initialization error:", error);
						}
					});
			} catch (err) {
				console.error("Failed to initialize Monaco:", err);
			}
		}

		// Cleanup function that won't trigger cancelation errors
		return () => {
			mountedRef.current = false;
		};
	});

	return monacoInstance;
}

export default useMonaco;
