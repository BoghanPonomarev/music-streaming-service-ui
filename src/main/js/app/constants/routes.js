// Get public path
const publicPath = process.env.ASSET_PATH;

// Index route
export const index = () => `/${publicPath}/`;

// Index route
export const home = () => `/${publicPath}/home`;

export const play = () => `/${publicPath}/play`;

export const adminStreamList = () => `/${publicPath}/streams`;

export const adminStreamPage = () =>  `/${publicPath}/streams/:streamName`;

