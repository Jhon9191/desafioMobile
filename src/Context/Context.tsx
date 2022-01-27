import React, { useState, createContext, useEffect } from "react";
import firebase from '../services/firebaseConection';

export const Context = createContext({});

export default function ContextProvider({ children }: any) {

    const [active, setActive] = useState("Characters");


    const [headerFilms, setHeaderFilms] = useState([]);
    const [aparitionsFilms, setAparitionsFilms] = useState([]);
    const [charactersFilms, setCharactersFilms] = useState([]);

    const [headerFilms2] = useState([
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYHsjCsylNhR-A75s7oa9eWVLB2DgBnNYJ0A&usqp=CAU",
        "https://disneyplusbrasil.com.br/wp-content/uploads/2021/07/Doutor-Estranho-Serie-Disney-Plus-1024x576.jpg",
        "https://br.web.img3.acsta.net/r_654_368/newsv7/19/09/26/20/05/3744726.jpg",
    ]);
    const [aparitionsFilms2] = useState([
        "https://www.kabum.com.br/hotsite/intelavengers/img/banner-avengers.jpg",
        "https://cdn.ome.lt/iWtTEqpjVa9iqBgp225cl3Ubezc=/1200x630/smart/uploads/theme/images/avengers-4-art-marvel_g6mG0fl.jpg",
        "https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/09/ultron-robot-1129581-1280x0.jpeg",
        "https://www.einerd.com.br/wp-content/uploads/2021/01/WandaVision-capa-2-ok.jpg",
        "https://www.blogdehollywood.com.br/wp-content/uploads/2019/04/avengers-endgame-poster-top-half.jpg",
    ]);
    const [charactersFilms2] = useState([
        { key: 1, name: "Capitã Marvel", url: "https://s2.glbimg.com/AscFm7yFxaBYEDVEUkpR9zxIhvw=/e.glbimg.com/og/ed/f/original/2021/09/16/brie_larson.png" },
        { key: 2, name: "Hulk", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCiDw-AIz76o04bff-SbmksKuwPa_WPBDoUw&usqp=CAU" },
        { key: 3, name: "Home Aranha", url: "https://ovicio.com.br/wp-content/uploads/2021/12/20211214-ovicio-homem-aranha-marvel-sony-filme-730x365.jpg" },
    ]);

    const [headerFilms3] = useState([
        "https://www.einerd.com.br/wp-content/uploads/2019/03/galactus-e1564151261123.jpg",
        "https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/09/cropped-SGEDDON2018000cov.0.jpg",
        "https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/12/Iron-Man-2020-Arno-Stark-Comic-Cover.jpg",
    ]);
    const [aparitionsFilms3] = useState([
        "https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/09/ultron-robot-1129581-1280x0.jpeg",
        "https://www.kabum.com.br/hotsite/intelavengers/img/banner-avengers.jpg",
        "https://www.blogdehollywood.com.br/wp-content/uploads/2019/04/avengers-endgame-poster-top-half.jpg",
        "https://www.einerd.com.br/wp-content/uploads/2021/01/WandaVision-capa-2-ok.jpg",
        "https://cdn.ome.lt/iWtTEqpjVa9iqBgp225cl3Ubezc=/1200x630/smart/uploads/theme/images/avengers-4-art-marvel_g6mG0fl.jpg",
    ]);
    const [charactersFilms3] = useState([
        { key: 1, name: "Hulk", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCiDw-AIz76o04bff-SbmksKuwPa_WPBDoUw&usqp=CAU" },
        { key: 2, name: "Capitã Marvel", url: "https://s2.glbimg.com/AscFm7yFxaBYEDVEUkpR9zxIhvw=/e.glbimg.com/og/ed/f/original/2021/09/16/brie_larson.png" },
        { key: 3, name: "Home Aranha", url: "https://ovicio.com.br/wp-content/uploads/2021/12/20211214-ovicio-homem-aranha-marvel-sony-filme-730x365.jpg" },
    ]);

    const [activeModal, setActiveModal] = useState(false);
    const [dataModal, setDataModal] = useState([]);

    useEffect(() => {
        LoadFirstViewItens();
    }, [])

    const LoadFirstViewItens = async() =>{
        await firebase.firestore().collection("topPersonagens").get().then((querySnapshot) => {
            loadHeader(querySnapshot, setHeaderFilms, headerFilms);
        })
        await firebase.firestore().collection("topFilms").get().then((querySnapshot) => {
            loadAparitions(querySnapshot, setAparitionsFilms, aparitionsFilms);
        })
        await firebase.firestore().collection("theCharacters").get().then((querySnapshot) => {
            loadCharacters(querySnapshot, setCharactersFilms, charactersFilms);
        })
    }

    const loadAparitions = (querySnapshot: any, setValue: any, vetor: any) => {
        const lista: any = []
        querySnapshot.forEach((doc: any) => {
            lista.push({
                url: doc.data().url
            })
        })
        setValue(vetor => [...vetor, ...lista]);
    }
    const loadHeader = (querySnapshot: any, setValue: any, vetor: any) => {
        const lista: any = []
        querySnapshot.forEach((doc: any) => {
            lista.push({
                id: doc.id,
                name: doc.data().name,
                url: doc.data().url,
                description: doc.data().description,
                score: doc.data().score

            })
        })
        setValue(vetor => [...vetor, ...lista]);
    }
    const loadCharacters = (querySnapshot: any, setValue: any, vetor: any) => {
        const lista: any = []
        querySnapshot.forEach((doc: any) => {
            console.log(doc.data())
            lista.push({
                id: doc.id,
                name: doc.data().name,
                url: doc.data().url,
                description: doc.data().description,
            })
        })
        setValue(vetor => [...vetor, ...lista]);
    }

    return (
        <Context.Provider value={{
            active,
            setActive,
            aparitionsFilms,
            headerFilms,
            charactersFilms,
            aparitionsFilms2,
            headerFilms2,
            charactersFilms2,
            aparitionsFilms3,
            headerFilms3,
            charactersFilms3,
            activeModal,
            setActiveModal,
            dataModal,
            setDataModal
        }}>
            {children}
        </Context.Provider>
    )

}