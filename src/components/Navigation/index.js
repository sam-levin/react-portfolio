import react from "react";

const Navigation = ({categories, currentCategory, setCurrentCategory}) => {
    return (
        <div className="flex-row flex-auto">
            {categories.map((category, i )=> (
            <li
                className={` flex-row flex-auto mx-2 ${
                    currentCategory.name === category.name && `navActive`
                }`}>
                    <a onClick={ () => {setCurrentCategory(category)}}>{category.name}</a>
            </li>))}
        </div>
    )
}

export default Navigation;