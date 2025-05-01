import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" text-gray-300 pt-8 bg-custom-secondaryBackground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: About Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-page-title">
              About Our NFT Marketplace
            </h3>
            <p className="text-sm text-page-title">
              We are a leading platform for discovering, buying, and selling
              unique NFTs. Our mission is to empower creators and collectors in
              the digital art world.
            </p>
            <div className="mt-4">
              <Link
                href="/terms"
                className="text-gray-500 hover:text-purple-500 mr-4"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-purple-500"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-page-title">
            <h3 className="text-xl font-semibold mb-4 text-page-title">
              Quick Links
            </h3>
            <ul>
              <li>
                <Link
                  href="/"
                  className="hover:text-purple-500 block py-1 text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/nft"
                  className="hover:text-purple-500 block py-1 text-sm"
                >
                  Explore NFTs
                </Link>
              </li>
              <li>
                <Link
                  href="/collections"
                  className="hover:text-purple-500 block py-1 text-sm"
                >
                  Explore Collections
                </Link>
              </li>
              <li>
                <Link
                  href="/create"
                  className="hover:text-purple-500 block py-1 text-sm"
                >
                  Create NFT
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="hover:text-purple-500 block py-1 text-sm"
                >
                  My Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-purple-500 block py-1 text-sm"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Connect With Us
            </h3>
            <p className="text-sm mb-2">
              Stay up to date with the latest NFT drops and news.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white">
                <i className="fab fa-twitter fa-lg"></i>
              </Link>
              <Link href="#" className="hover:text-white">
                <i className="fab fa-instagram fa-lg"></i>
              </Link>
              <Link href="#" className="hover:text-white">
                <i className="fab fa-discord fa-lg"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 py-4 text-center text-sm">
          &copy; {new Date().getFullYear()} NFT Marketplace. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
