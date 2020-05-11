// Get public path
const publicPath = process.env.ASSET_PATH;

// Index route
export const index = () => `/`;

export const play = () => `/streams/:streamName`;

export const adminLoginPage = () => `/admin/login`;

export const adminStreamList = () => `/admin/streams`;

export const adminStreamPage = () =>  `/admin/streams/:streamName`;

