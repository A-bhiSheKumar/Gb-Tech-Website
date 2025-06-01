import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";

const year = new Date().getFullYear();

export function Footer({
  title,
  description,
  socials,
  menus,
  copyright,
}) {
  return (
    <footer className="relative px-4 pt-10 pb-6 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10">
          {/* Left Section */}
          <div className="text-center lg:text-left lg:w-1/2">
            <Typography variant="h4" className="mb-4 text-black dark:text-white">
              {title}
            </Typography>
            <Typography className="max-w-md mx-auto lg:mx-0 font-normal text-blue-gray-500 dark:text-gray-400">
              {description}
            </Typography>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-4 mt-6">
              {socials.map(({ color, name, path }) => (
                <a key={name} href={path} target="_blank" rel="noopener noreferrer" aria-label={name}>
                  <IconButton color="white" className="rounded-full shadow-md bg-gray-100 dark:bg-gray-800 hover:scale-110 transition-transform">
                    <Typography color={color}>
                      <i className={`fa-brands fa-${name} text-xl`} />
                    </Typography>
                  </IconButton>
                </a>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full lg:w-1/2">
            {menus.map(({ name, items }) => (
              <div key={name}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 block font-semibold uppercase tracking-wide dark:text-white"
                >
                  {name}
                </Typography>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item.name}>
                      <Typography
                        as="a"
                        href={item.path}
                        target="_blank"
                        rel="noreferrer"
                        variant="small"
                        className="block font-normal text-blue-gray-500 hover:text-blue-700 dark:text-gray-400 dark:hover:text-white transition-colors"
                      >
                        {item.name}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className="my-8 border-gray-300 dark:border-gray-700" />

        <div className="text-center">
          <Typography variant="small" className="text-blue-gray-500 dark:text-gray-400">
            {copyright}
          </Typography>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  title: "Gb-Tech",
  description:
    "We offer innovative solutions with excellence, reliability, and commitment to your growth.",
  socials: [
    {
      color: "blue",
      name: "linkedin",
      path: "https://www.linkedin.com/company/gbtechservice",
    },
    {
      color: "blue",
      name: "facebook",
      path: "https://www.facebook.com/gbtechservice",
    },
  ],
  menus: [
    {
      name: "Quick Links",
      items: [
        { name: "Solutions", path: "#" },
        { name: "Resources", path: "#" },
        { name: "About Us", path: "#" },
        { name: "Contact", path: "#" },
      ],
    },
    {
      name: "Legal",
      items: [
        { name: "Privacy Policy", path: "#" },
        { name: "Terms of Service", path: "#" },
        { name: "HIPAA Notice", path: "#" },
      ],
    },
    {
      name: "Contact Information",
      items: [
        {
          name: "Email: director@gbtechservice.com",
          path: "mailto:director@gbtechservice.com",
        },
        {
          name: "Phone: +91-9830288526",
          path: "tel:+919830288526",
        },
        {
          name: "Address: Unit - 9ES5, Mani Casadona, Action Area - IIF, Newtown, Kolkata, West Bengal 700156, India",
          path: "https://maps.google.com?q=Mani+Casadona+Newtown+Kolkata",
        },
      ],
    },
  ],
  copyright: (
    <>
      © {year} Gb-Tech. All rights reserved.
    </>
  ),
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
