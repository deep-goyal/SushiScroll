import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const LoadingSkeleton = () => {
  return (
    <Card width={"220px"} borderRadius={20} overflow={"hidden"}>
      <Skeleton height={"400px"}>
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Skeleton>
    </Card>
  );
};

export default LoadingSkeleton;
