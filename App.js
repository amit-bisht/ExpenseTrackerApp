import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import RecentExpense from './screens/RecentExpense'
import ManageExpense from './screens/ManageExpense'
import AllExpenses from './screens/AllExpenses'
import { GlobalStyles } from './constants/styles'
import { Ionicons } from '@expo/vector-icons'
import IconButton from './components/UI/IconButton'
function App() {

  const Stack = createNativeStackNavigator()
  const BottomTabs = createBottomTabNavigator()

  function ExpenseOverview() {
    return (
      <BottomTabs.Navigator screenOptions={({ navigation }) => ({

        headerRight: ({ tintColor }) => {
          return (<IconButton onPress={()=>{navigation.navigate("ManageExpense")}} size={24} color={tintColor} icon="add" />)
        },
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500
      }
      )}>
        <BottomTabs.Screen name='RecentExpense' component={RecentExpense} options={{
          title: 'Recent Expense',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => { return (<Ionicons name="hourglass" size={size} color={color} />) }
        }} />
        <BottomTabs.Screen name='AllExpenses' component={AllExpenses} options={{
          title: 'All Expenses',
          tabBarLabel: 'All Expenses',
          tabBarIcon: ({ color, size }) => { return (<Ionicons name="calendar" size={size} color={color} />) }
        }} />
      </BottomTabs.Navigator>
    )
  }

  return (
    <>
      <StatusBar style='auto' />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='ExpenseOverview'>
          <Stack.Screen name='ExpenseOverview' component={ExpenseOverview} options={{ headerShown: false }} />
          <Stack.Screen name='ManageExpense' component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
export default App