import ContentLoader from "react-content-loader";

const SkeletonProductItem: React.FC = () => {
    return (
        <ContentLoader
            speed={2}
            width={400}
            height={500}
            viewBox="0 0 400 500"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="10" y="13" rx="0" ry="0" width="370" height="250" />
            <rect x="10" y="278" rx="0" ry="0" width="188" height="30" />
            <rect x="10" y="321" rx="0" ry="0" width="379" height="36" />
            <rect x="10" y="372" rx="0" ry="0" width="271" height="27" />
            <rect x="10" y="413" rx="0" ry="0" width="139" height="22" />
            <rect x="131" y="448" rx="0" ry="0" width="143" height="36" />
        </ContentLoader>
    );
};

export default SkeletonProductItem;
