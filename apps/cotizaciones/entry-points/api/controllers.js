// apps/component-a/entry-points/api/controllers.js
import { getAllUsers } from '../../domain/logic.js';

export async function getUsers(req, res) {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    console.error('Error retrieving users:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
}

