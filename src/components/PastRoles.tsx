import { pastRoles } from "@/constants/pastRoles";
import RolePanel from "./RolePanel";

// Stacked sequence of role panels — same bold treatment as the current role,
// no connecting timeline dots/lines.
const PastRoles = () => {
  return (
    <>
      {pastRoles.map((role) => (
        <RolePanel key={role.id} data={role} />
      ))}
    </>
  );
};

export default PastRoles;
