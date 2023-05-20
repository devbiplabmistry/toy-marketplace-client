
const Blog = () => {
    return (
        <div className="mt-12">
            <h3>What is an access token and refresh token?</h3>
            <p>A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources.</p>
            <br />
            <h3>How do they work and where should we store them on the client-side?</h3>
            <p>Once they expire, client applications can use a refresh token to "refresh" the access token. That is, a refresh token is a credential artifact that lets a client application get new access tokens without having to ask the user to log in again.</p>
            <p>The actual client-side databases are stored on the user's computer and are directly accessed by JavaScript code in the browser.</p>
            <br />
            <h3>Compare SQL and NoSQL databases?</h3>
            <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON</p>
            <br />
            <h3>What is express js? What is Nest JS?</h3>
            <p>Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI</p>
            <br />
            <h3>What is MongoDB aggregate and how does it work?</h3>
            <p>What is Aggregation in MongoDB? Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
        </div>
    );
};

export default Blog;