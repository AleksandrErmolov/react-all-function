import React from 'react';
import MyInput from "./UI/Input/MyInput";
import MySelect from "./UI/MySelect/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>

            <MyInput
                placeholder={'поиск'}
                type='text'
                value={filter.query}
                onChange={e=> setFilter({...filter, query:e.target.value})}
            />

            <MySelect defaultValue='Сортировка по'
                      options={[
                          {value: 'title', name: 'По названию'},
                          {value: 'body', name: 'По описанию'},

                      ]}
                      value={filter.sort} onChange={selectedSort => setFilter({...filter, sort:selectedSort})}
            />

        </div>
    );
};

export default PostFilter;