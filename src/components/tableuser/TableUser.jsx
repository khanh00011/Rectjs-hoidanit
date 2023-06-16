import './Paginate.css'
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import getAllUser from '../../api/userapi/UserApi';
import ReactPaginate from 'react-paginate';

function TableUsers() {
    const [listUser , setListUser] = useState([]);
    const [totalPage , setTotalPage] = useState();
    useEffect(() => {
        getUsers();
    }, [])

    const  getUsers = async (number) => {
       const res = await getAllUser(number);
       if(res && res.data) {
            setListUser(res.data);
            setTotalPage(res.total_pages);
       }
    }
    const handlePageClick = (event) => {
        getUsers(+event.selected + 1)
    }
  return (
    <Container >
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>ID</th>
                <th>Email</th>
                <th>First Name</th>
                <th>Last name</th>
                {/* <th> avatar</th> */}
                </tr>
            </thead>
            <tbody>
                {
                    listUser.map((user , index) => {
                        return (
                            <tr key={`user-${index}`}>
                                <td>{user.id}</td>
                                <td>{user.email}</td>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                {/* <td center><img src={user.avatar} alt="image" /></td> */}
                            </tr>
                        )
                    })
                }
                
            </tbody>
        </Table>
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={totalPage}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
    </Container>

  );
}

export default TableUsers;