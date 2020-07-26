import { Router } from 'express';

import appointmentsRouts from './appointments.routes';
import usersRouts from './users.routes';
import sessionsRouts from './sessions.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouts);
routes.use('/users', usersRouts);
routes.use('/sessions', sessionsRouts);

export default routes;
