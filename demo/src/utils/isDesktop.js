import device from './device';

export default !(device.mobile() || device.tablet() || device.phone());
