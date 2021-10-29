import { React, useState } from 'react';
import PageBrowser from './Controls/PageBrowser';
import DataLoader from './DataLoader';
import { ListWidget } from './Controls/ListWidget';
import { FilterWidget } from './Controls/FilterWidget';
import './App.css';

let isInitialized = false;

function App({ pageConfig }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  if (!isInitialized) {
    const dataLoader = new DataLoader();
    dataLoader.load(pageConfig).then((loadResult) => {
      setData(loadResult);
      setLoading(false);
      isInitialized = true;
    });
  }
  return (
    <div>
      {loading ? <h1>Идет загрузка...</h1> :
        <PageBrowser loadResult={data}>
          <ListWidget />
          <FilterWidget/>
        </PageBrowser>
      }
    </div>
  );
}

export default App;
