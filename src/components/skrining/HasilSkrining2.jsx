import React from 'react'

const HasilSkrining2 = () => {
  return (
<div className="card w-full bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Kemungkinan Lain</h2>
    <div className="overflow-x-auto overflow-y-auto">
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th>Gangguan</th>
        <th>Persentase</th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      <tr>
        <td>Mola Hydatidosa</td>
        <td>70%</td>
      </tr>
      {/* <!-- row 2 --> */}
      <tr>
        <td>Emesis Gravidarum</td>
        <td>66%</td>
      </tr>
      {/* <!-- row 3 --> */}
      <tr>
        <td>Anemia</td>
        <td>40%</td>
      </tr>
    </tbody>
  </table>
</div>
  </div>
</div>
    
  )
}

export default HasilSkrining2