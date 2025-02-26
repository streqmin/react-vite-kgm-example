import axios from 'axios'
import { useEffect, useState } from 'react'

const AxiosClientPage = () => {
  const [contacts, setContacts] = useState(null)

  useEffect(() => {
    getContacts()
  }, [])

  const getContacts = async () => {
    await axios
      .get('https://sample.bmaster.kro.kr/contacts?pageno=3&pagesize=10')
      .then((response) => {
        console.log('get contacts')
        setContacts(response.data.contacts)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const removeContact = (event) => {
    let no = event.target.name
    // 이벤트가 적용된 객체의 name 속성을 가져온다
    console.log(event)
    console.log(no)
    console.log(event.target.name)

    setContacts(contacts.filter((contact) => contact.no != no))
  }

  return (
    <>
      <h1>axios contact list</h1>
      <button onClick={getContacts}>클라이언트 데이터</button>
      <hr />
      <table>
        <tr>
          <th>번호</th>
          <th>이름</th>
          <th>전화번호</th>
          <th>주소</th>
          <th>사진</th>
          <th>삭제</th>
        </tr>
        {contacts &&
          contacts.map((contact, index) => (
            <tr key={index}>
              <td>{contact.no}</td>
              <td>{contact.name}</td>
              <td>{contact.tel}</td>
              <td>{contact.address}</td>
              <td>
                <img src={contact.photo} alt='person' />
              </td>
              <td>
                <input type='button' name={contact.no} onClick={removeContact} value='삭제' />
              </td>
            </tr>
          ))}
      </table>
    </>
  )
}

export default AxiosClientPage
