function Header({ userName }: { userName: string }) {
  return (
    <header>
      <h1>Welcome, {userName}!</h1>
    </header>
  )
}

export default Header