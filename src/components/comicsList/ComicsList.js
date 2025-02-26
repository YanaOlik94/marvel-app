import { useState, useEffect, useRef } from 'react';
import './comicsList.scss';
import uw from '../../resources/img/UW.png';
import xMen from '../../resources/img/x-men.png';
import useMarvelService from '../../services/MarvelService';

const ComicsList = () => {

    const [comicsList, setComicsLis] = useState([]);
    const [offset, setOffset] = useState(90);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [comicsEnded, setcharEnded] = useState(false);

    const {loading, error, getAllComics} =  useMarvelService();

    useEffect(() => {
        onRequest(offset, true);
    }, [])

    const onRequest = (offset, initial) => {
        initial ?  setNewItemLoading(false) :  setNewItemLoading(true)
        getAllComics(offset).then(onComicsListLoaded)
    }

    
    const onComicsListLoaded = (newComicsList) => {
    
        setComicsLis(comicsList => [...comicsList, ...newComicsList]);
        setNewItemLoading(newItemLoading => false)
        setOffset(offset => offset + 9)
    
    }

    function renderComics(arr) {

        const items =  arr.map((item, i) => {

        return (
                <li className="comics__item"
                    tabIndex={0}
                    key={item.id} 
                 >
                    <a href={item.link}>
                        <img src={item.thumbnail} alt="ultimate war" className="comics__item-img"/>
                        <div className="comics__item-name">{item.title}</div>
                        <div className="comics__item-price">{item.price}$</div>
                    </a>
                </li>  
        )
    });
    
    return (
            <ul className="comics__grid">
                {items}
            </ul>
    )
    };


    const comics = renderComics(comicsList);

    return (
        <div className="comics__list">
            {comics}
            <button 
            className="button button__main button__long"
            disabled={newItemLoading}
            onClick={() => onRequest(offset)}
            >
            <div className="inner">load more</div>
            </button>
        </div>
    )

   

}

export default ComicsList;