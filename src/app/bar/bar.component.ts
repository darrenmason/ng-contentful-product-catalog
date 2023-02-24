import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  ngOnInit(): void {
    this.createSvg();
    this.drawBars(this.data);
  }

  private data = [
    { "Framework": "CIT", "Stars": "166443" },
    { "Framework": "First Citizens", "Stars": "150793" },
    { "Framework": "Tatooine Credit Union", "Stars": "62342" },
    { "Framework": "Starfleet Savings and Loan", "Stars": "27647" },
    { "Framework": "The Shire Holdings", "Stars": "21471" },
  ];
  private svg: any;
  private margin = 100;
  private width = 450 - (this.margin * 2);
  private height = 400 - (this.margin * 2);

  private createSvg(): void {
    this.svg = d3.select("figure#bar")
      .append("svg")
      .attr("width", this.width + (this.margin * 2))
      .attr("height", this.height + (this.margin * 2))
      .append("g")
      .attr("transform", "translate(" + 60 + "," + 40 + ")");
  }

  private drawBars(data: any[]): void {
    const x = d3.scaleBand()
      .range([0, this.width])
      .domain(data.map(d => d.Framework))
      .padding(0.2);

    this.svg.append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-35)")
      .style("text-anchor", "end");

    const y = d3.scaleLinear()
      .domain([0, 200000])
      .range([this.height, 0]);

    this.svg.append("g")
      .call(d3.axisLeft(y));

    const colors = d3.schemeTableau10;

    this.svg.selectAll("bars")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d: any) => x(d.Framework))
      .attr("y", (d: any) => y(d.Stars))
      .attr("width", x.bandwidth())
      .attr("height", (d: any) => this.height - y(d.Stars))
      .attr("fill", () => colors[Math.floor(Math.random() * colors.length)]);
  }





  



}
