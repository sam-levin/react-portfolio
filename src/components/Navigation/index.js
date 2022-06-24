import react from "react";

const Navigation = ({categories, currentCategory, setCurrentCategory}) => {
    return (
        <div>
            {categories.map((category, i )=> (
            <li
                className={` ${
                    currentCategory.name === category.name && `navActive`
                }`}>
                    <a onClick={ () => {setCurrentCategory(category)}}>{category.name}</a>
            </li>))}
        </div>
    )
}

export default Navigation;