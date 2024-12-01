import React from "react";
import { Route } from "react-router";
import ProjectPage from "../pages/ProjectPage";

function ProjectRoutes() {
    return (
        <Route>
            <Route index element={<ProjectPage />} />
            {/* <Route path="register" element={<Register />} /> */}
        </Route>
    )
}

export default ProjectRoutes;