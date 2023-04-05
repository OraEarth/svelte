import { HoudiniClient } from '$houdini';

console.log("session: " + session?.user)

export default new HoudiniClient({
    url: 'https://data.ora.earth/graphql',
    fetchParams({ session }) {
        return {
            headers: {
                Authorization: `Bearer ${session?.user.token}`,
            },
        }
    },
})