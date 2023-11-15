import { __nextjs_pure } from 'next/dist/build/swc/helpers';
import dynamic from 'next/dynamic';
export const NextDynamicNoSSRServerComponent = dynamic(async ()=>{
    typeof window !== "undefined" ? ()=>import('../text-dynamic-no-ssr-server') : require.resolveWeak("../text-dynamic-no-ssr-server");
}, {
    loadableGenerated: {
        modules: [
            "some-file.js -> " + "../text-dynamic-no-ssr-server"
        ]
    },
    ssr: false
});
