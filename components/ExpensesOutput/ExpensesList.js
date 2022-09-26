import {FlatList,Text} from 'react-native'
import ExpenseItem from './ExpenseItem'
function renderExpenseItem(itemData){
    return(
        <ExpenseItem {...itemData.item}/>
    )
}
function ExpenseList({expenses}){
    return(
        <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={(item)=>{return item.id}}>
        </FlatList>
    )
}
export default ExpenseList