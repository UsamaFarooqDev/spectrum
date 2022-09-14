import React from 'react';
import "../css/worker.css";
import dp from "../images/dp.png";
import logo from "../images/download.png";
import { Redirect } from 'react-router';
import "../js/worker.js";

const invitation = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row header">
          <div className="col-sm-8 col-7 text-left">
            <h4>Welcome To Spectrum Staffing Solutions</h4>
          </div>
          <div className="col-sm-4 col-5 text-right">
            <div class="dropdown open">
              <img src={dp} width="70" class="dropdown-toggle rounded-circle" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false" />
              <div class="dropdown-menu" aria-labelledby="triggerId">
                <a class="dropdown-item" href="#">Profile</a>
                <a class="dropdown-item " href="/worker">Logout</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2">
          <button className="btn btn-danger" onClick={window['hide_sidebar']} style={{float:'left'}}>Close</button> 
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2 sidebar text-center " id="mainside" >
          
       
            <br /><br /> <br />
           
           <section id="sidebar">
           <a href="Workerhome"> Dashboard</a> <br /> <br /><br />
            <a href="invitations"> Invitations </a> <br /><br /><br />
            <a href="invitations"> Submitted Applications</a> <br /><br /><br />
            <a href="invitations"> Profile </a>
           </section>
          </div>
          <div className="col-sm-10 rightside">
            <br /><br />
            <div class="row">
              <div class="col-sm-12">
                <h1 style={{ backgroundColor: '#3E444A', color: '#fff', textAlign: 'center', borderRadius: '20px' }}>Your Latest Invitations</h1>
              </div>
            </div>
            <br />

            <div class="row">
              <div class="col-sm-12">
                <table class="table table-striped table-dark">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default invitation;
