import css from "rollup-plugin-import-css";
import nodeResolve from "@rollup/plugin-node-resolve";

export default {
    input: "src/app.js",
    output: {
        dir: "dist",
        format: "iife",      
    },
    plugins: [css({
        output: "bundles.css",
        minify: true,
      }), nodeResolve()],
    
    
}

