import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("root-template.tsx", [
        index("routes/home.tsx"),
        route("about", "routes/about.tsx"),
        route("mentorship", "routes/mentorship.tsx"),
        route("work-with-me", "routes/workwithme.tsx"),
    ])
] satisfies RouteConfig;
