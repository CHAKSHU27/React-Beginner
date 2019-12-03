import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import Title from './Components/title';
import RecentBookList from './Components/display';
import AddBooks from './Components/addBook';
class App extends Component
{
    constructor()
    {
        super();
        this.state = {
        bookList : [
            {
                name : "B1",
                author : "A1",
            },
            {
                name : "B2",
                author : "A2",
            },
            {
                name : "B3",
                author : "A3",
            },
            {
                name : "B4",
                author : "A4",
            },
        ]
    }
    this.remove = this.remove.bind(this);
}
remove(removePost)
{
    this.setState(prevState => {
        const updatedbooks = prevState.bookList.filter(book => {
            if(book.name !== removePost){
                return book;
            }
            return null
        })
        return {
            bookList: updatedbooks
        }
    })
}
add(addPost){
    this.setState((state)=>{
       return  state.bookList = state.bookList.concat([addPost])
    
    })
}

    render()
    {
        return <div>
            <Route exact path="/" component={Title} />
            <Route exact path="/homepage"
             render={props => <RecentBookList bookList={this.state.bookList} remove={this.remove} />} />
            <Route exact path='/form' 
            render={({history}) =><AddBooks add={(prop)=>{ 
            this.add(prop)
             history.push('/homepage');
            }} />}></Route>
        </div>
    }
}
export default App;
