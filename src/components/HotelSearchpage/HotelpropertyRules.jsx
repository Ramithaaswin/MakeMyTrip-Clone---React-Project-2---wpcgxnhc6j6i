const HotelpropertyRules = ({ data }) => {
  return (
    <div>
      <h2 className="propertyrules-head">Property Rules</h2>

      <div className="high-borderline"></div>

      <ul className="propertyrules-ul">
        <div className="propertyrules-li">
          <span className="greyDot"></span>
          <li>Guests below 18 years of age are not allowed at the property.</li>
        </div>
        <div className="propertyrules-li">
          <span className="greyDot"></span>
          <li>
            {data?.data?.houseRules.restrictions.petsAllowed
              ? "Pets are allowed."
              : "Pets are not allowed."}
          </li>
        </div>
        <div className="propertyrules-li">
          <span className="greyDot"></span>
          <li>
            {data?.data?.houseRules.restrictions.smokingAllowed
              ? "Smoking is allowed."
              : "Smoking is not allowed."}
          </li>
        </div>

        {/* Guest Profile */}
        <div className="propertyrules-li">
          <span className="greyDot"></span>
          <li>
            {data?.data?.houseRules.guestProfile.unmarriedCouplesAllowed
              ? "Unmarried couples are allowed."
              : "Unmarried couples are not allowed."}
          </li>
        </div>

        {/* ID Proof Related */}
        <div className="propertyrules-li">
          <span className="greyDot"></span>
          <li>
            ID proofs accepted:{" "}
            {data?.data?.houseRules.idProofRelated.idProofsAccepted.join(", ")}
          </li>
        </div>
        <div className="propertyrules-li">
          <span className="greyDot"></span>
          <li>
            {data?.data?.houseRules.idProofRelated.localIdsAllowed
              ? "Local IDs are allowed."
              : "Local IDs are not allowed."}
          </li>
        </div>
      </ul>
    </div>
  );
};
export default HotelpropertyRules;
