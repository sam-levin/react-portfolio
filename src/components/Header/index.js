import react from "react";

const Header = () => {
    function categorySelected(name) {
        console.log(`${name} clicked`)
      }
    const categories = [
        {
          name: ""
        },
        { name: "portraits", description: "Portraits of people in my life" },
        {
          name: "landscape",
          description: "Fields, farmhouses, waterfalls, and the beauty of nature",
        },
      ];

    return (
        <header className="flex-auto">
        <h2>
          <a href="/">
            Sam Levin
          </a>
        </h2>
      </header>
    )

    
}

export default Header;