import './App.css';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalList from './components/JournalList/JournalList';
import JournalForm from './components/JournalForm/JournalForm';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import './App.css';
import { useLocalStorage } from './hooks/use-localstorage.hook';
import { UserContextProvidev } from './context/user.context';
import { useState } from 'react';

function mapItems(items) {
	if (!items) {
		return [];
	}
	return items.map(i => ({
		...i,
		date: new Date(i.date)
	}));
}

function App() {
	const [items, setItems] = useLocalStorage('data');
	const [userId, setUserId] = useState(1);
	const [selectedItem, setSelectedItem] = useState({});

	const addItem = item => {
		if (!item.id) {
		setItems([...mapItems(items), {
			...item,
			date: new Date(item.date),
			id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1
		}]);
	} else {
			setItems([...mapItems(items).map(i => {
				if (i.id === item.id) {
					return {
						...item
					};
				}
				return i;
			})]);
		}
	};

  return (
	<UserContextProvidev value={{ userId, setUserId }}>
		<div className='app'>
			<LeftPanel>
				<Header/>
				<JournalAddButton/>
				<JournalList items={mapItems(items)} setItem={setSelectedItem}/>
			</LeftPanel>
			<Body><JournalForm onSubmit={addItem} data={selectedItem}/></Body>
		</div>
	</UserContextProvidev>
  );
}

export default App;
