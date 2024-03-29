import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import {ComponentType} from "react";

export function withRouter(Component: ComponentType) {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}