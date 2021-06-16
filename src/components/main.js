import React from "react";

class Main extends React.Component {
  news = () => {
    const fullNews = [];

    this.props.date.forEach((day, index) => {
      fullNews.push(
        <div key={index} className="news-block">
          <div className="news-block__date">{day}</div>
          <div className="news-block__news">{this.props.info[index]}</div>
        </div>
      );
    });

    return fullNews;
  };

  render() {
    return (
      <div className="main">
        {/* MAIN PAGE */}
        {this.props.info && (
          <div>
            <form onSubmit={this.props.newsMethod}>
              <input type="text" name="news" placeholder="YYYY-MM-DD" />
              <button>Search</button>
            </form>
            <div>{this.news()}</div>
          </div>
        )}
        {this.props.title === "Welcome" && <div>Welcome!</div>}

        {/* GALLERY */}
        {this.props.url && (
          <div>
            <button onClick={this.props.picMethod}>Change Collection</button>
            <p>This is Gallery</p>
            <div className="gallery">
              {this.props.url.map((url, index) => (
                <div className="gallery-polaroid">
                  <img src={url} alt="Picture is loading... " />

                  <p className="gallery-title">{this.props.title[index]}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ABOUT */}
        {this.props.discription && (
          <div>
            <p>
              Our Universe is stunning! And it's a pity we don't see it's
              beauty!
            </p>
            <p>
              This app is aming to display incredible pictures of what is
              happening in around our plannet.
            </p>
            <p>
              The sourse is
              <a href="https://apod.nasa.gov/apod/astropix.html" target="blanc">
                APOD (Astronomy picture of the Day
              </a>
              website where we take the most spectaclar picture of the day!
            </p>
          </div>
        )}
      </div>
    );
  }
}
export default Main;
