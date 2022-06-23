import React from 'react'
import './CategoryLayout.css'
import { catArray } from '../../../Database/Categories'
import { Link } from 'react-router-dom'
import { allPosts } from '../../../Database/SortedPosts'
import { MdKeyboardArrowRight } from 'react-icons/md'

const CategoryLayout = () => {
    const postLen = (input) => {
        return allPosts.filter(element => element.categories.find(element => element.id === input)).length;
    }
    return (
        <div className="category-layout">
            <ul>
                {catArray.map((element, index) => {
                    return (
                        <li key={index}>
                            <Link to={element.url}>
                                <div>
                                    <MdKeyboardArrowRight />
                                    {element.name}
                                </div>
                                <span>({postLen(element.id)})</span>
                            </Link>
                            {element.child.length >= 1 &&
                                <ul className='children'>
                                    {element.child.map((element, index) => {
                                        return <li key={index}>
                                            <Link to={element.url}>
                                                <div>
                                                    <MdKeyboardArrowRight />
                                                    {element.name}
                                                </div>
                                                <span>({postLen(element.id)})</span>
                                            </Link>
                                        </li>
                                    })}
                                </ul>
                            }
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default CategoryLayout