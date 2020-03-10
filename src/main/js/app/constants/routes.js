// Get public path
const publicPath = process.env.ASSET_PATH;

// Index route
export const index = () => `/${publicPath}/`;

export const play = () => `/${publicPath}/streams/:streamName`;

export const adminStreamList = () => `/${publicPath}/admin/streams`;

export const adminStreamPage = () =>  `/${publicPath}/admin/streams/:streamName`;

