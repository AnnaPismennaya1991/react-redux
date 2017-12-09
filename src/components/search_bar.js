import React, { Component } from 'react';

class SearchBar extends Component { //class base component - компонент поиск-ввод
    constructor(props) {
        super(props);

        this.state = { term: ''}; //строка поиска - ввода текста - пустое поле ''
    }

    render () {
        return (
            <div className='search-bar'>
                <input
                value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

}

export default SearchBar;


//Вызов React setState перестраивает приложение и обновляет DOM.

//state описывает визуальные свойства элемента
//Объект state описывает внутреннее состояние компонента-определяется внутри компонента и доступно только из компонента.
//значения в state можно изменять,они должны использоваться при рендеринге.
//объект state можно установить только в конструктор класса

//props (properties-свойства)-это входные данные, которые передаются в компонент извне, оказывают влияние на отображение и поведение компонента.
//props передается от родительского компонента к дочернему и не распространяются вниз по иерархии

//всё, что возвращает метод компонентов render не более, чем шаблон, который вы хотите увидеть на странице

//строка onChange контролирует ввод текста в поле ввода - без нее не вводится текст.
//строка onChange - controlled form components

//Контролируемый компонент - свойство prop «value» компонента
