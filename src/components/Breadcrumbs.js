import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

export const BreadCrumbsMenu = ({menu}) => {
  return (
    <Breadcrumbs aria-label="breadcrumb" className="mt-16">
      <Link underline="hover" color="inherit" href="/about-us">
        Home
      </Link>
      <Typography color="text.primary">{menu}</Typography>
    </Breadcrumbs>
  );
};
