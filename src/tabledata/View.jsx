import React from "react";

const View = ({ userinfo, deleteuserinfo, edituserinfo }) => {
  return userinfo.map((jobinformation) => (
    <tr key={jobinformation.id}>
      <td>{jobinformation.shiftdata.lokingfor}</td>
      <td>{jobinformation.shiftdata.hourlyrate}</td>
      <td>{jobinformation.shiftdata.experience}</td>
      <td>{jobinformation.shiftdata.education}</td>
      <td>{jobinformation.shiftdata.skill}</td>
      <td>{jobinformation.shiftdata.genders}</td>

      <td>
        <button
          className="edit"
          onClick={() => edituserinfo(jobinformation.jobtitle)}
          type="button"
          style={{
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          Edit
        </button>
      </td>
      <td>
        <button
          className="delete"
          onClick={() => deleteuserinfo(jobinformation.jobtitle)}
          type="button"
          style={{
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  ));
};
export default View;
