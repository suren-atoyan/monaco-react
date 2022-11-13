import React from "react";
import AppBar from "@material-ui/core/AppBar";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import classNames from "classnames";

import Notifications from "notifications";

import { useStore } from "store";
import { isMobile } from "utils";

import config from "config";

import useStyles from "./useStyles";

const Header = (_) => {
  const classes = useStyles();
  const {
    state: {
      themeMode,
      monacoTheme,
      editor: { selectedLanguageId },
    },
    actions: {
      setThemeMode,
      editor: { setSelectedLanguageId, setMonacoTheme },
    },
  } = useStore();

  function handleThemeSwitch(ev) {
    setThemeMode(themeMode === "light" ? "dark" : "light");
    setMonacoTheme(themeMode === "light" ? "vs-dark" : "light");
  }

  function handleLanguageChange(ev) {
    setSelectedLanguageId(ev.target.value);
  }

  return (
    <>
      <AppBar color="default">
        <Toolbar>
          <Typography className={classes.logo}>{"<MR />"}</Typography>
          {!isMobile && (
            <Typography variant="h6" className={classes.title}>
              React IDE
            </Typography>
          )}
          <TextField
            select
            variant="filled"
            value={selectedLanguageId}
            onChange={handleLanguageChange}
            className="text-width"
            label="Language"
          >
            {config.supportedLanguages.map((language) => (
              <MenuItem key={language.id} value={language.id}>
                {language.name}
              </MenuItem>
            ))}
          </TextField>
          <Button onClick={handleThemeSwitch}>
            <span
              className={classNames(classes.stars, {
                [classes.activate]: themeMode === "dark",
              })}
            />
            <span
              className={classNames(classes.stars, {
                [classes.activate]: themeMode === "dark",
              })}
            />
            <img
              className={classNames(classes.themeSwitcher, {
                [classes.rotate]: themeMode === "dark",
              })}
              width="40"
              src={config.urls.themeModeIcon}
              alt="theme mode icon"
            />
          </Button>
          <Button target="_blank" rel="noreferrer" href={config.links.github}>
            GitHub
            <img width="40" src={config.urls.octocatIcon} alt="github icon" />
          </Button>
        </Toolbar>
      </AppBar>
      <Notifications />
    </>
  );
};

export default Header;
