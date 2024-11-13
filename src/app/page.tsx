import Login from "../../component/login";

export default function Home() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", textAlign: "center" }}>
      <div>
        <h1>Counter App</h1>
        <br />
        <Login/>
      </div>
    </div>
  )
}
