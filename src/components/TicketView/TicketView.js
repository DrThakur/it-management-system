import React, { useContext } from "react";
import Select from "react-select";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { Context } from "../../context/Context";

const TicketView = () => {
  const [toRecipients, setToRecipients] = useState([]);
  const [ccRecipients, setCcRecipients] = useState([]);
  const [bccRecipients, setBccRecipients] = useState([]);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleToChange = (selectedOptions) => {
    setToRecipients(selectedOptions);
  };

  const handleCcChange = (selectedOptions) => {
    setCcRecipients(selectedOptions);
  };

  const handleBccChange = (selectedOptions) => {
    setBccRecipients(selectedOptions);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleMessageChange = (content) => {
    setMessage(content);
  };

  const options = ["Ankit", "Abhishek", "Rinku"];
  // const exportColumns = options.map((option)=> {
  //   return option,
  // })

  // const exportPdf = () => {
  //   import("jspdf").then((jsPDF) => {
  //     import("jspdf-autotable").then(() => {
  //       const doc = new jsPDF.default(0, 0);

  //       doc.autoTable(exportColumns, users);
  //       doc.save("users.pdf");
  //     });
  //   });
  // };

  return (
    <div className="bg-gray-100 rounded-lg shadow-md w-full">
      <div className="w-full">
        <div className="flex flex-row justify-between items-center bg-sky-100 rounded-l ml-2 mr-2 mt-2 p-2">
          <h1 className="text-2xl font-bold ml-2">
            Ticket ID: <span className="text-blue-500">LFT/IT/2023/0001</span>
          </h1>
          <div className="flex gap-3 mr-2">
            <span className="text-xl">
              <select
                name="status"
                id="status"
                className="bg-cyan-400 text-white rounded-lg shadow-md p-3 px-4"
              >
                <option vlaue="select">Select Status</option>
                <option vlaue="Open">Open</option>
                <option vlaue="Resolved">Resolved</option>
                <option vlaue="Closed">Closed</option>
              </select>
            </span>
            {/* <span className="text-xl">
              <select
                name="status"
                id="status"
                className="bg-cyan-400 text-white rounded-lg shadow-md p-3 px-4"
              >
                <option vlaue="select">Reassign</option>
                {options.map((option) => {
                  return <option vlaue={option}>{option}</option>;
                })}
              </select>
            </span> */}
            <button className="bg-pink-500 border-none p-3 rounded-lg text-white">
              Reassign
            </button>
            <button className="bg-cyan-500 border-none p-3 rounded-lg text-white">
              Print Pdf
            </button>
            <button className="bg-red-500 border-none p-3 rounded-lg text-white">
              Delete Ticket
            </button>
          </div>
        </div>
      </div>
      <div className="sub header flex flex-row justify-between items-center mt-4 bg-cyan-100 ml-2 mr-2 rounded-lg p-2">
        <div className="left part ml-2">
          <h1 className="text-2xl font-bold">
            User :
            <span className="font-semibold text-blue-500 ml-4">
              "Ankit Kumar Thakur"
            </span>
          </h1>
          <h1 className="text-2xl font-bold">
            Email ID:
            <span className="font-semibold text-blue-500 ml-4">
              akankit114@gmail.com
            </span>
          </h1>
          <h1 className="text-2xl font-bold">
            Created On:
            <span className="font-semibold text-blue-500 ml-4">
              20 Aug 2023 , 8:32 PM
            </span>
          </h1>
          <h1 className="text-2xl font-bold">
            SLA:
            <span className="font-semibold text-blue-500 ml-4">
              Default SLA
            </span>
          </h1>
          <h1 className="text-2xl font-bold">
            Due Date:
            <span className="font-semibold text-blue-500 ml-4">
              20 Aug 2023 , 8:32 PM
            </span>
          </h1>
          <h1 className="text-2xl font-bold">
            Closed Date:
            <span className="font-semibold text-blue-500 ml-4">
              20 Aug 2023 , 8:32 PM
            </span>
          </h1>
        </div>
        <div className="right part mr-2">
          <h1 className="text-2xl font-bold">
            Status :
            <span className="font-semibold text-blue-500 ml-4">"Pending"</span>
          </h1>
          <h1 className="text-2xl font-bold">
            Priority :
            <span className="font-semibold text-blue-500 ml-4">
              "High Priority"
            </span>
          </h1>
          <h1 className="text-2xl font-bold">
            Issue Type:
            <span className="font-semibold text-blue-500 ml-4">
              "Report/Request"
            </span>
          </h1>
          <h1 className="text-2xl font-bold">
            Assigned To:
            <span className="font-semibold text-blue-500 ml-4">
              "Sachin Sharma"
            </span>
          </h1>
          <h1 className="text-2xl font-bold">
            Manager Approved On:
            <span className="font-semibold text-blue-500 ml-4">
              19 Aug 2023 , 6:32 PM
            </span>
          </h1>

          <h1 className="text-2xl font-bold">
            Last Message:
            <span className="font-semibold text-blue-500 ml-4">
              19 Aug 2023 , 6:32 PM
            </span>
          </h1>
        </div>
      </div>
      <div className="ticket description mt-2 border-2 flex flex-row justify-evenly items-center bg-yellow-100">
        <h1 className="text-2xl font-bold w-1/4 ml-2">Ticket Description :</h1>
        <div className="description box  mt-2 mb-2 p-4 flex flex-grow w-3/4 mr-4 text-lg bg-white rounded-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quia
          vero quidem itaque quo, voluptatibus error recusandae saepe accusamus
          soluta repellendus consequuntur excepturi, a sit. Dolore, obcaecati.
          Illo numquam vero ut odio! Repudiandae dolorem at optio
          exercitationem, maiores totam dolorum consequuntur dolore, fugit
          facere vel quod doloribus, ex perspiciatis quae.
        </div>
      </div>
      <div className="manager approval flex flex-row items-center justify-start gap-8 border-2 mt-2 bg-pink-100 rounded-lg mb-2 p-2">
        <h1 className="text-2xl font-bold w-1/4 ml-2">Approved By Manager:</h1>
        <button className="bg-yellow-500 rounded-lg p-3 px-8 text-white font-bold text-xl w-1/5">
          Awaited
        </button>
      </div>
      <div className="ticket thread mt-2 bg-cyan-100 rounded-lg shadow-md p-3">
        <h1 className="rounded-lg text-2xl font-bold mb-4 ml-1 mr-1 ">
          Ticket Threads
        </h1>
        <div className="bg-white rounded-lg">
          <div className="flex flex-row justify-start items-start">
            <img
              src="data:image/png;base64,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"
              alt="user avatar"
              className="w-40 h-40 rounded-full ml-3 mt-2"
            />
            <div className="flex flex-col ml-4 w-3/4 rounded-lg shadow-md mt-2">
              <h1 className="bg-blue-300 p-4 rounded-md">
                <span className="text-xl font-bold">Ankit Thakur</span> posted
                19 Aug 2023 , 6:32 PM
              </h1>
              <h1 className="bg-white p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, dolorum sint odio enim voluptate dolorem, libero illo
                tenetur officia cum, consequatur reprehenderit cumque alias
                itaque est incidunt perspiciatis exercitationem vel iure eos!
                Omnis odit rerum assumenda adipisci, sed illum repellendus alias
                nobis exercitationem. Fuga minima, cum nisi tempore qui
                inventore.
              </h1>
            </div>
          </div>
          <div className="flex flex-row justify-end items-end mt-4">
            <div className="flex flex-col mr-4 w-3/4 rounded-lg shadow-md mb-3">
              <h1 className="bg-green-300 p-4 rounded-md">
                <span className="text-xl font-bold">Ankit Thakur</span> posted
                19 Aug 2023 , 6:32 PM
              </h1>
              <h1 className="bg-white p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, dolorum sint odio enim voluptate dolorem, libero illo
                tenetur officia cum, consequatur reprehenderit cumque alias
                itaque est incidunt perspiciatis exercitationem vel iure eos!
                Omnis odit rerum assumenda adipisci, sed illum repellendus alias
                nobis exercitationem. Fuga minima, cum nisi tempore qui
                inventore.
              </h1>
            </div>
            <img
              src="data:image/png;base64,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"
              alt="user avatar"
              className="w-40 h-40 rounded-full mr-3 mb-3"
            />
          </div>
        </div>
      </div>
      <div className="w-[98%] mt-4 p-2 bg-green-100 rounded-lg shadow-md ml-4 h-[98%]">
        <h1 className="text-2xl font-bold ml-1 p-2">Post a Reply</h1>
        <div className="email-compose mt-4 p-4 border-2 w-3/4 mx-auto bg-white rounded-lg shadow-md mb-2">
          <form className="flex flex-col">
            <label htmlFor="to" className="font-bold mb-1">
              From:
            </label>
            <Select
              isMulti
              options={[] /* Populate with your suggestions data */}
              onChange={handleToChange}
            />
            <label htmlFor="to" className="font-bold mb-1 mt-2">
              To:
            </label>
            <Select
              isMulti
              options={[] /* Populate with your suggestions data */}
              onChange={handleToChange}
            />
            <label htmlFor="cc" className="font-bold mb-1 mt-2">
              CC:
            </label>
            <Select
              isMulti
              options={[] /* Populate with your suggestions data */}
              onChange={handleCcChange}
            />

            <label htmlFor="message" className="font-bold mb-1 mt-2">
              Message:
            </label>
            <ReactQuill
              value={message}
              theme="snow"
              onChange={handleMessageChange}
              className="border p-2 rounded mb-2"
            />
            <div className="signature flex flex-row justify-start items-center gap-28  p-3 mt-2 mb-4">
              <h1 className="text-2xl font-bold">Signature</h1>
              <div className="flex flex-row justify-center items-center ml-8 gap-8">
                <div className="flex flex-row justify-center items-center gap-2 text-xl font-semibold">
                  <input type="radio" name="none" id="none" />
                  <label htmlFor="none">None</label>
                </div>
                <div className="flex flex-row justify-center items-center gap-2 text-xl font-semibold">
                  <input type="radio" name="mySignature" id="mySignature" />
                  <label htmlFor="mySignature">My Signature</label>
                </div>
                <div className="flex flex-row justify-center items-center gap-2 text-xl font-semibold">
                  <input
                    type="radio"
                    name="departmemtSignature"
                    id="departmemtSignature"
                  />
                  <label htmlFor="departmentSignature">
                    Department Signature(Support)
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-start items-center gap-28 mb-4 mt-2 p-3">
              <span className="text-2xl font-bold"> Ticket Status: </span>
              <span className="text-xl">
                <select
                  name="status"
                  id="status"
                  className="bg-cyan-400 text-white rounded-lg shadow-md p-2 px-4"
                >
                  <option vlaue="select">Select Status</option>
                  <option vlaue="Open">Open</option>
                  <option vlaue="Resolved">Resolved</option>
                  <option vlaue="Closed">Closed</option>
                </select>
              </span>
            </div>
            <div className="flex flex-row justify-center items-center gap-6">
              <button
                type="submit"
                className="bg-green-500 text-white p-2 rounded w-1/5"
              >
                Post Reply
              </button>
              <button
                type="submit"
                className="bg-gray-500 text-white p-2 rounded w-1/5"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TicketView;
