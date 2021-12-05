export const Table = ({ headers, rows }) => {
    return (
      <table ml="4">
        <thead>
          <tr>
            {headers.map((header) => (
              <th>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index)=> (
            <tr key={index} style={{
                borderBottom: "1px solid grey"
            }}>
                {row.map(cell => (
                    <td style={{
                        padding: ".25rem"
                    }}>{cell}</td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
}