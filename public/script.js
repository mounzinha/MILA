const form = document.getElementById('userForm');
const userList = document.getElementById('userList');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  await fetch('/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email })
  });

  form.reset();
  loadUsers();
});

async function loadUsers() {
  const res = await fetch('/users');
  const users = await res.json();
  userList.innerHTML = '';

  users.forEach((user) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${user.name} (${user.email})
      <button onclick="editUser('${user._id}')">Editar</button>
      <button onclick="deleteUser('${user._id}')">Excluir</button>
    `;
    userList.appendChild(li);
  });
}

async function editUser(id) {
  const name = prompt('Novo nome:');
  const email = prompt('Novo email:');
  if (name && email) {
    await fetch(`/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email })
    });
    loadUsers();
  }
}

async function deleteUser(id) {
  await fetch(`/users/${id}`, { method: 'DELETE' });
  loadUsers();
}

loadUsers();
