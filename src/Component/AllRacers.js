import styled from "styled-components";

const Main = styled.div`
  margin: 20px auto 50px auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 200px;
  max-width: 300px;
  background-color: rgba(198, 175, 177, 0.1);
  box-shadow: 0px 0px 9px 2px rgba(198, 175, 177, 0.6);
  border-radius: 10px;
  margin: 5px;
`;

const CardTitle = styled.div`
  text-transform: capitalize;
  font-weight: 600;
`;

const CardSubtitle = styled.div`
  text-transform: capitalize;
  font-weight: 400;
  margin-top: 10px;
  color: #787878;
  span {
    margin-right: 20px;
  }
`;

const CardBody = styled.div`
  flex: 1 1 auto;
  padding: 1.1rem;
`;

const AllRacers = ({ winner, races }) => {
  return (
    <Main>
      {races.map((race) => (
        <Card>
          <CardBody>
            <CardTitle>{race.raceName}</CardTitle>
            <CardSubtitle>{race.Circuit.circuitName}</CardSubtitle>

            <CardSubtitle>
              <span>🏎️</span>{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href={race.Results[0].Driver.url}
              >
                {race.Results[0].Driver.givenName}{" "}
                {race.Results[0].Driver.familyName}
              </a>
            </CardSubtitle>

            <CardSubtitle>
              <i class="fas fa-car"></i> {race.Results[0].Constructor.name}
            </CardSubtitle>

            <CardSubtitle>
              {" "}
              <i class="fas fa-stopwatch"></i>
              {race.Results[0].Time.time}
            </CardSubtitle>
          </CardBody>
        </Card>
      ))}
    </Main>
  );
};

export default AllRacers;
