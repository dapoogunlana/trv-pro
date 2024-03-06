import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import './type-suggest.scss';

interface iTypeSuggestProp {
  data: any[];
  selected: Function;
  subKey?: string;
  floatOption?: boolean;
  typePlaceholder?: string;
  listLength?: number;
  initialValue?: string;
}

const TypeSuggestComponent = (props: iTypeSuggestProp) => {

  const [suggestionList, setSuggestionList] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState(props.initialValue || '');
  const [inputSelected, setInputSelected] = useState(props.initialValue ? true : false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectionInArea, setSelectionInArea] = useState(false);

  const changeInputValue = (event: any) => {
    setInputSelected(false);
    const value = event.target?.value;
    setInputValue(value);
    props.selected('');
    if(value){
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }

  const hideSuggestions = (event: any) => {
    console.log({secondArea: selectionInArea});
    if(!selectionInArea) {
      setShowSuggestions(false);
    }
  }

  const toggleSelectionArea = (type: boolean) => {
    setSelectionInArea(type);
    console.log({selectionInArea, aka: 'all'});
  }

  const selectListItem = (item: any) => {
    if(props.subKey) {
      setInputValue(item[props.subKey]);
    } else {
      setInputValue(item);
    }
    props.selected(item);
    setInputSelected(true);
    setShowSuggestions(false);
  }

  const filterSelection = () => {
    if(!inputValue) {
      setSuggestionList([]);
      return;
    }
    const selection: any[] = [];
    for(let i = 0; (i < props.data.length && selection.length <= (props.listLength || 10)); i++) {
      const controlValue: string = props.subKey ? props.data[i][props.subKey || ''] : props.data[i];
      if(controlValue.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())){
        selection.push(props.data[i]);
      }
    }
    setSuggestionList(selection);
  }

  useEffect(() => {
    filterSelection();
  }, [inputValue]);

  return (
    <div className="type-suggest" onBlur={hideSuggestions} onMouseLeave={() => toggleSelectionArea(false)} onMouseEnter={() => toggleSelectionArea(true)}>
      <div className={"type-box" + (inputSelected ? ' selected' : '')}>
        <input
          type="text"
          placeholder={props.typePlaceholder || "Enter search details"}
          value={inputValue}
          onChange={changeInputValue}
        />
      </div>
      {
        showSuggestions &&
        <div className={"Suggestion-list" + (props.floatOption ? ' floating-list' : '')}>
          <div className="scrollable">
            {
              suggestionList.map((item, index) => (
                <div key={index} className="list-item" onClick={() => selectListItem(item)}>
                  <p className="mb-0">{props.subKey ? item[props.subKey] : item}</p>
                </div>
              ))
            }
            {
              suggestionList.length === 0 &&
              <p className="text-center mb-0 reduced">No item matches your search</p>
            }
          </div>
        </div>
      }
    </div>
  );
}
export default TypeSuggestComponent;
