import React, { Component } from 'react';
import { getCategories } from '../services/api';

export default class Category extends Component {
  constructor(pro) {
    super(pro);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    getCategories().then((response) => {
      this.setState({ categories: response });
    });
  }

  render() {
    const { categories } = this.state;
    return (

      <div>
        {categories.map(({ name, id }) => (
          <label htmlFor="check">
            <input
            name="check"
            data-testid="category"
            type="radio"
            value={ id }
            key={ id } />{name}
          </label>
        ))}
      </div>
    );
  }
}
