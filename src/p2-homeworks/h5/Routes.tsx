import React from 'react';
import {Switch, Route, Redirect, HashRouter} from 'react-router-dom';
import Error404 from './pages/Error404';
import Junior from './pages/Junior';
import PreJunior from './pages/PreJunior';
import Junior_Plus from './pages/Junior_Plus';
import NavBar from './NavBar';


export const PATH = {
	PRE_JUNIOR: '/pre-junior',
	JUNIOR: '/junior',
	JUNIOR_PLUS: '/plus-junior',
}

function Routes() {
	return (
		<div>
			<HashRouter>
				<NavBar />
				<Switch>

					{/*в начале мы попадаем на страницу "/" и переходим сразу на страницу PRE_JUNIOR*/}
					{/*exact нужен чтоб указать полное совподение (что после "/" ничего не будет)*/}

					<Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>


					<Route path={PATH.PRE_JUNIOR} exact render={() => <PreJunior/>}/>
					<Route path={PATH.JUNIOR} exact render={() => <Junior/>}/>
					<Route path={PATH.JUNIOR_PLUS} exact render={() => <Junior_Plus/>}/>


					{/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
					<Route render={() => <Error404/>}/>

				</Switch>
			</HashRouter>
		</div>
	);
}

export default Routes;
