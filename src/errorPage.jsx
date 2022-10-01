import './index.scss';

import Header from './layout/Header/Header';
import SearchPanel from './components/SearchPanel/SearchPanel';
import Footer from './layout/Footer/Footer';
import NotFound from './components/NotFound/NotFound'


function ErrorPage() {
	return (
		<div className="AppError">
			<Header className='header' />
			<div className="container">

				<SearchPanel className='search' />
			</div>
			<NotFound className="notFound" title='No results found' message='select other parameters and try again' />
			<Footer className='footer' />
		</div>
	);
}

export default ErrorPage;
