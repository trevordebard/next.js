import { __nextjs_pure } from 'next/dist/build/swc/helpers';
import dynamic from 'next/dynamic';
const DynamicComponent = dynamic(async ()=>{
    typeof window !== "undefined" ? ()=>handleImport(import('./components/hello')) : require.resolveWeak("./components/hello");
}, {
    loadableGenerated: {
        modules: [
            "some-file.js -> " + "./components/hello"
        ]
    },
    loading: ()=>null,
    ssr: false
});
