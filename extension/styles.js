// eslint-disable-next-line import/prefer-default-export
export const contentStyles = `
:host {
  --font-size: 16px;
  --line-height: calc(var(--font-size) + 2);

  --spacing: 16px;

  --border-radius: 14px;

  --color-white: #fff;
  --color-border: #E8E8E8;
  --color-brand: #7e50d3;
  --color-body-subtle: #404040;
  --color-body-subtler: #595959;
  --color-body-main: #000;
}

.HeurekaBox {
  margin: var(--spacing) 0;
  max-width: 1000px;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  background: var(--color-white);
}

.HeurekaBox a {
  color: var(--color-brand);
  text-decoration: none;
}

.HeurekaBox__Header {
  padding: var(--spacing);
  min-height: 24px;
  line-height: 24px;
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  background: var(--color-brand);
  color: var(--color-white);
  font-size: var(--font-size);
  font-weight: bold;

}
.HeurekaBox__Header svg {
  float: right;
}

.HeurekaBox__NotFound {
  padding: var(--spacing);
  color: var(--color-body-subtle);
  font-size: var(--font-size);
  font-weight: bold;
  line-height: var(--line-height);
}

.HeurekaBox__ProductsList__Item {
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: var(--spacing);
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-white);
  text-decoration: none;
}
.HeurekaBox:hover {
  background-color: #f4f4f4;
}

.HeurekaBox__ProductImage {
  margin-right: cals(var(--spacing) / 2);
  width: 48px;
  height: 48px;
}

.HeurekaBox__ProductInfoColumn {
  flex: 1;
  box-sizing: border-box;
  padding: var(--spacing);
}

.HeurekaBox__ProductName {
  margin: 0 0 calc(var(--spacing) / 2) 0;
  color: var(--color-body-main);
  font-size: var(--font-size);
  font-weight: bold;
  line-height: var(--line-height);
}

.HeurekaBox__ProductCategory {
  margin: 0;
  color: var(--color-body-subtler);
  font-size: 14px;
  line-height: 16px;
}

.HeurekaBox__ProductPrice {
  color: var(--color-body-subtler);
  text-align: right;
  font-weight: bold;
  font-size: var(--font-size);
  line-height: var(--line-height);
}

.HeurekaBox__Footer {
  display: flex;
  justify-content: space-between;
  padding: 5px var(--spacing);
  color: var(--color-body-subtler);
  font-size: 10px;
}

`;
